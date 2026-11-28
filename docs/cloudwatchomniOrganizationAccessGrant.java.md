# `cloudwatchomniOrganizationAccessGrant` Submodule <a name="`cloudwatchomniOrganizationAccessGrant` Submodule" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniOrganizationAccessGrant <a name="CloudwatchomniOrganizationAccessGrant" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant aws_cloudwatchomni_organization_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrant;

CloudwatchomniOrganizationAccessGrant.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .name(java.lang.String)
    .permission(java.lang.String)
//  .principal(IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipal>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.principal">principal</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>></code> | principal block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.permission"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.principal"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal CloudwatchomniOrganizationAccessGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#region CloudwatchomniOrganizationAccessGrant#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal"></a>

```java
public void putPrincipal(IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipal> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>>

---

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetPrincipal"></a>

```java
public void resetPrincipal()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrant;

CloudwatchomniOrganizationAccessGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrant;

CloudwatchomniOrganizationAccessGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrant;

CloudwatchomniOrganizationAccessGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrant;

CloudwatchomniOrganizationAccessGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchomniOrganizationAccessGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchomniOrganizationAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchomniOrganizationAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniOrganizationAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantId">grantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantType">grantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList">CloudwatchomniOrganizationAccessGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principalInput">principalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantId"></a>

```java
public java.lang.String getGrantId();
```

- *Type:* java.lang.String

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantType"></a>

```java
public java.lang.String getGrantType();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principal"></a>

```java
public CloudwatchomniOrganizationAccessGrantPrincipalList getPrincipal();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList">CloudwatchomniOrganizationAccessGrantPrincipalList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principalInput"></a>

```java
public IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipal> getPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniOrganizationAccessGrantConfig <a name="CloudwatchomniOrganizationAccessGrantConfig" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantConfig;

CloudwatchomniOrganizationAccessGrantConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainId(java.lang.String)
    .name(java.lang.String)
    .permission(java.lang.String)
//  .principal(IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipal>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.principal">principal</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>></code> | principal block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.principal"></a>

```java
public IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipal> getPrincipal();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal CloudwatchomniOrganizationAccessGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#region CloudwatchomniOrganizationAccessGrant#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}.

---

### CloudwatchomniOrganizationAccessGrantPrincipal <a name="CloudwatchomniOrganizationAccessGrantPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantPrincipal;

CloudwatchomniOrganizationAccessGrantPrincipal.builder()
    .principalType(java.lang.String)
//  .principalAttribute(IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute>)
//  .principalId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalType">principalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalAttribute">principalAttribute</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>></code> | principal_attribute block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}. |

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}.

---

##### `principalAttribute`<sup>Optional</sup> <a name="principalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalAttribute"></a>

```java
public IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute> getPrincipalAttribute();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>>

principal_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_attribute CloudwatchomniOrganizationAccessGrant#principal_attribute}

---

##### `principalId`<sup>Optional</sup> <a name="principalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}.

---

### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute;

CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniOrganizationAccessGrantPrincipalList <a name="CloudwatchomniOrganizationAccessGrantPrincipalList" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantPrincipalList;

new CloudwatchomniOrganizationAccessGrantPrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get"></a>

```java
public CloudwatchomniOrganizationAccessGrantPrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipal> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>>

---


### CloudwatchomniOrganizationAccessGrantPrincipalOutputReference <a name="CloudwatchomniOrganizationAccessGrantPrincipalOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference;

new CloudwatchomniOrganizationAccessGrantPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute">putPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalAttribute">resetPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalId">resetPrincipalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalAttribute` <a name="putPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute"></a>

```java
public void putPrincipalAttribute(IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>>

---

##### `resetPrincipalAttribute` <a name="resetPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalAttribute"></a>

```java
public void resetPrincipalAttribute()
```

##### `resetPrincipalId` <a name="resetPrincipalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalId"></a>

```java
public void resetPrincipalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttribute">principalAttribute</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttributeInput">principalAttributeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalAttribute`<sup>Required</sup> <a name="principalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttribute"></a>

```java
public CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList getPrincipalAttribute();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList</a>

---

##### `principalAttributeInput`<sup>Optional</sup> <a name="principalAttributeInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttributeInput"></a>

```java
public IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute> getPrincipalAttributeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>>

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalTypeInput"></a>

```java
public java.lang.String getPrincipalTypeInput();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>

---


### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList;

new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get"></a>

```java
public CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>>

---


### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatchomni_organization_access_grant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference;

new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>

---



