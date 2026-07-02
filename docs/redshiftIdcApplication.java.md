# `redshiftIdcApplication` Submodule <a name="`redshiftIdcApplication` Submodule" id="@cdktn/provider-aws.redshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftIdcApplication <a name="RedshiftIdcApplication" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application aws_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplication;

RedshiftIdcApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iamRoleArn(java.lang.String)
    .idcDisplayName(java.lang.String)
    .idcInstanceArn(java.lang.String)
    .redshiftIdcApplicationName(java.lang.String)
//  .applicationType(java.lang.String)
//  .authorizedTokenIssuer(IResolvable|java.util.List<RedshiftIdcApplicationAuthorizedTokenIssuer>)
//  .identityNamespace(java.lang.String)
//  .region(java.lang.String)
//  .serviceIntegration(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcDisplayName">idcDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.authorizedTokenIssuer">authorizedTokenIssuer</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>></code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.identityNamespace">identityNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.serviceIntegration">serviceIntegration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>></code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcDisplayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.idcInstanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.redshiftIdcApplicationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.applicationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `authorizedTokenIssuer`<sup>Optional</sup> <a name="authorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.authorizedTokenIssuer"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>>

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `identityNamespace`<sup>Optional</sup> <a name="identityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.identityNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `serviceIntegration`<sup>Optional</sup> <a name="serviceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.serviceIntegration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>>

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer">putAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration">putServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer">resetAuthorizedTokenIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace">resetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration">resetServiceIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizedTokenIssuer` <a name="putAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer"></a>

```java
public void putAuthorizedTokenIssuer(IResolvable|java.util.List<RedshiftIdcApplicationAuthorizedTokenIssuer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putAuthorizedTokenIssuer.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>>

---

##### `putServiceIntegration` <a name="putServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration"></a>

```java
public void putServiceIntegration(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.putServiceIntegration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>>

---

##### `resetApplicationType` <a name="resetApplicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetApplicationType"></a>

```java
public void resetApplicationType()
```

##### `resetAuthorizedTokenIssuer` <a name="resetAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetAuthorizedTokenIssuer"></a>

```java
public void resetAuthorizedTokenIssuer()
```

##### `resetIdentityNamespace` <a name="resetIdentityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetIdentityNamespace"></a>

```java
public void resetIdentityNamespace()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceIntegration` <a name="resetServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetServiceIntegration"></a>

```java
public void resetServiceIntegration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isConstruct"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplication;

RedshiftIdcApplication.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplication;

RedshiftIdcApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplication;

RedshiftIdcApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplication;

RedshiftIdcApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftIdcApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer">authorizedTokenIssuer</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration">serviceIntegration</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput">authorizedTokenIssuerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput">idcDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput">identityNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput">redshiftIdcApplicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput">serviceIntegrationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName">idcDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace">identityNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizedTokenIssuer`<sup>Required</sup> <a name="authorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuer"></a>

```java
public RedshiftIdcApplicationAuthorizedTokenIssuerList getAuthorizedTokenIssuer();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList">RedshiftIdcApplicationAuthorizedTokenIssuerList</a>

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```java
public java.lang.String getIdcManagedApplicationArn();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationArn`<sup>Required</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```java
public java.lang.String getRedshiftIdcApplicationArn();
```

- *Type:* java.lang.String

---

##### `serviceIntegration`<sup>Required</sup> <a name="serviceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegration"></a>

```java
public RedshiftIdcApplicationServiceIntegrationList getServiceIntegration();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList">RedshiftIdcApplicationServiceIntegrationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizedTokenIssuerInput`<sup>Optional</sup> <a name="authorizedTokenIssuerInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.authorizedTokenIssuerInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationAuthorizedTokenIssuer> getAuthorizedTokenIssuerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idcDisplayNameInput`<sup>Optional</sup> <a name="idcDisplayNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayNameInput"></a>

```java
public java.lang.String getIdcDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArnInput"></a>

```java
public java.lang.String getIdcInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `identityNamespaceInput`<sup>Optional</sup> <a name="identityNamespaceInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespaceInput"></a>

```java
public java.lang.String getIdentityNamespaceInput();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="redshiftIdcApplicationNameInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```java
public java.lang.String getRedshiftIdcApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceIntegrationInput`<sup>Optional</sup> <a name="serviceIntegrationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.serviceIntegrationInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegration> getServiceIntegrationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcDisplayName"></a>

```java
public java.lang.String getIdcDisplayName();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `identityNamespace`<sup>Required</sup> <a name="identityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.identityNamespace"></a>

```java
public java.lang.String getIdentityNamespace();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```java
public java.lang.String getRedshiftIdcApplicationName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuer <a name="RedshiftIdcApplicationAuthorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationAuthorizedTokenIssuer;

RedshiftIdcApplicationAuthorizedTokenIssuer.builder()
//  .authorizedAudiencesList(java.util.List<java.lang.String>)
//  .trustedTokenIssuerArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}. |

---

##### `authorizedAudiencesList`<sup>Optional</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.authorizedAudiencesList"></a>

```java
public java.util.List<java.lang.String> getAuthorizedAudiencesList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorized_audiences_list RedshiftIdcApplication#authorized_audiences_list}.

---

##### `trustedTokenIssuerArn`<sup>Optional</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer.property.trustedTokenIssuerArn"></a>

```java
public java.lang.String getTrustedTokenIssuerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#trusted_token_issuer_arn RedshiftIdcApplication#trusted_token_issuer_arn}.

---

### RedshiftIdcApplicationConfig <a name="RedshiftIdcApplicationConfig" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationConfig;

RedshiftIdcApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iamRoleArn(java.lang.String)
    .idcDisplayName(java.lang.String)
    .idcInstanceArn(java.lang.String)
    .redshiftIdcApplicationName(java.lang.String)
//  .applicationType(java.lang.String)
//  .authorizedTokenIssuer(IResolvable|java.util.List<RedshiftIdcApplicationAuthorizedTokenIssuer>)
//  .identityNamespace(java.lang.String)
//  .region(java.lang.String)
//  .serviceIntegration(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName">idcDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer">authorizedTokenIssuer</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>></code> | authorized_token_issuer block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace">identityNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration">serviceIntegration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>></code> | service_integration block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#iam_role_arn RedshiftIdcApplication#iam_role_arn}.

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```java
public java.lang.String getIdcDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_display_name RedshiftIdcApplication#idc_display_name}.

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#idc_instance_arn RedshiftIdcApplication#idc_instance_arn}.

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```java
public java.lang.String getRedshiftIdcApplicationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#redshift_idc_application_name RedshiftIdcApplication#redshift_idc_application_name}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#application_type RedshiftIdcApplication#application_type}.

---

##### `authorizedTokenIssuer`<sup>Optional</sup> <a name="authorizedTokenIssuer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.authorizedTokenIssuer"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationAuthorizedTokenIssuer> getAuthorizedTokenIssuer();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>>

authorized_token_issuer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorized_token_issuer RedshiftIdcApplication#authorized_token_issuer}

---

##### `identityNamespace`<sup>Optional</sup> <a name="identityNamespace" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.identityNamespace"></a>

```java
public java.lang.String getIdentityNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#identity_namespace RedshiftIdcApplication#identity_namespace}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#region RedshiftIdcApplication#region}

---

##### `serviceIntegration`<sup>Optional</sup> <a name="serviceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.serviceIntegration"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegration> getServiceIntegration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>>

service_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#service_integration RedshiftIdcApplication#service_integration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#tags RedshiftIdcApplication#tags}.

---

### RedshiftIdcApplicationServiceIntegration <a name="RedshiftIdcApplicationServiceIntegration" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegration;

RedshiftIdcApplicationServiceIntegration.builder()
//  .lakeFormation(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormation>)
//  .redshift(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshift>)
//  .s3AccessGrants(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrants>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation">lakeFormation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>></code> | lake_formation block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift">redshift</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>></code> | redshift block. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants">s3AccessGrants</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>></code> | s3_access_grants block. |

---

##### `lakeFormation`<sup>Optional</sup> <a name="lakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.lakeFormation"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormation> getLakeFormation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>>

lake_formation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#lake_formation RedshiftIdcApplication#lake_formation}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.redshift"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshift> getRedshift();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>>

redshift block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#redshift RedshiftIdcApplication#redshift}

---

##### `s3AccessGrants`<sup>Optional</sup> <a name="s3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration.property.s3AccessGrants"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrants> getS3AccessGrants();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>>

s3_access_grants block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#s3_access_grants RedshiftIdcApplication#s3_access_grants}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormation <a name="RedshiftIdcApplicationServiceIntegrationLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationLakeFormation;

RedshiftIdcApplicationServiceIntegrationLakeFormation.builder()
//  .lakeFormationQuery(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>></code> | lake_formation_query block. |

---

##### `lakeFormationQuery`<sup>Optional</sup> <a name="lakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation.property.lakeFormationQuery"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery> getLakeFormationQuery();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>>

lake_formation_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#lake_formation_query RedshiftIdcApplication#lake_formation_query}

---

### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery;

RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.builder()
    .authorization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationRedshift <a name="RedshiftIdcApplicationServiceIntegrationRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationRedshift;

RedshiftIdcApplicationServiceIntegrationRedshift.builder()
//  .connect(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshiftConnect>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect">connect</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>></code> | connect block. |

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift.property.connect"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshiftConnect> getConnect();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>>

connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#connect RedshiftIdcApplication#connect}

---

### RedshiftIdcApplicationServiceIntegrationRedshiftConnect <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationRedshiftConnect;

RedshiftIdcApplicationServiceIntegrationRedshiftConnect.builder()
    .authorization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrants <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationS3AccessGrants;

RedshiftIdcApplicationServiceIntegrationS3AccessGrants.builder()
//  .readWriteAccess(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess">readWriteAccess</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>></code> | read_write_access block. |

---

##### `readWriteAccess`<sup>Optional</sup> <a name="readWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants.property.readWriteAccess"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess> getReadWriteAccess();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>>

read_write_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#read_write_access RedshiftIdcApplication#read_write_access}

---

### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess;

RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.builder()
    .authorization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/redshift_idc_application#authorization RedshiftIdcApplication#authorization}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftIdcApplicationAuthorizedTokenIssuerList <a name="RedshiftIdcApplicationAuthorizedTokenIssuerList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationAuthorizedTokenIssuerList;

new RedshiftIdcApplicationAuthorizedTokenIssuerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get"></a>

```java
public RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationAuthorizedTokenIssuer> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>>

---


### RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference <a name="RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference;

new RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList">resetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn">resetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizedAudiencesList` <a name="resetAuthorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetAuthorizedAudiencesList"></a>

```java
public void resetAuthorizedAudiencesList()
```

##### `resetTrustedTokenIssuerArn` <a name="resetTrustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.resetTrustedTokenIssuerArn"></a>

```java
public void resetTrustedTokenIssuerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput">authorizedAudiencesListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput">trustedTokenIssuerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedAudiencesListInput`<sup>Optional</sup> <a name="authorizedAudiencesListInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesListInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedAudiencesListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedTokenIssuerArnInput`<sup>Optional</sup> <a name="trustedTokenIssuerArnInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArnInput"></a>

```java
public java.lang.String getTrustedTokenIssuerArnInput();
```

- *Type:* java.lang.String

---

##### `authorizedAudiencesList`<sup>Required</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.authorizedAudiencesList"></a>

```java
public java.util.List<java.lang.String> getAuthorizedAudiencesList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedTokenIssuerArn`<sup>Required</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.trustedTokenIssuerArn"></a>

```java
public java.lang.String getTrustedTokenIssuerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuerOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationAuthorizedTokenIssuer getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationAuthorizedTokenIssuer">RedshiftIdcApplicationAuthorizedTokenIssuer</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList;

new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference;

new RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationList <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationLakeFormationList;

new RedshiftIdcApplicationServiceIntegrationLakeFormationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>>

---


### RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference;

new RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery">putLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery">resetLakeFormationQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormationQuery` <a name="putLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery"></a>

```java
public void putLakeFormationQuery(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>>

---

##### `resetLakeFormationQuery` <a name="resetLakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.resetLakeFormationQuery"></a>

```java
public void resetLakeFormationQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput">lakeFormationQueryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lakeFormationQuery`<sup>Required</sup> <a name="lakeFormationQuery" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQuery"></a>

```java
public RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList getLakeFormationQuery();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQueryList</a>

---

##### `lakeFormationQueryInput`<sup>Optional</sup> <a name="lakeFormationQueryInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery> getLakeFormationQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery">RedshiftIdcApplicationServiceIntegrationLakeFormationLakeFormationQuery</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegrationLakeFormation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>

---


### RedshiftIdcApplicationServiceIntegrationList <a name="RedshiftIdcApplicationServiceIntegrationList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationList;

new RedshiftIdcApplicationServiceIntegrationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>>

---


### RedshiftIdcApplicationServiceIntegrationOutputReference <a name="RedshiftIdcApplicationServiceIntegrationOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationOutputReference;

new RedshiftIdcApplicationServiceIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation">putLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants">putS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation">resetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants">resetS3AccessGrants</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormation` <a name="putLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation"></a>

```java
public void putLakeFormation(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>>

---

##### `putRedshift` <a name="putRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift"></a>

```java
public void putRedshift(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshift> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putRedshift.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>>

---

##### `putS3AccessGrants` <a name="putS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants"></a>

```java
public void putS3AccessGrants(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrants> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>>

---

##### `resetLakeFormation` <a name="resetLakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetLakeFormation"></a>

```java
public void resetLakeFormation()
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetRedshift"></a>

```java
public void resetRedshift()
```

##### `resetS3AccessGrants` <a name="resetS3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.resetS3AccessGrants"></a>

```java
public void resetS3AccessGrants()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation">lakeFormation</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants">s3AccessGrants</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput">lakeFormationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput">redshiftInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput">s3AccessGrantsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lakeFormation`<sup>Required</sup> <a name="lakeFormation" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormation"></a>

```java
public RedshiftIdcApplicationServiceIntegrationLakeFormationList getLakeFormation();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormationList">RedshiftIdcApplicationServiceIntegrationLakeFormationList</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshift"></a>

```java
public RedshiftIdcApplicationServiceIntegrationRedshiftList getRedshift();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList">RedshiftIdcApplicationServiceIntegrationRedshiftList</a>

---

##### `s3AccessGrants`<sup>Required</sup> <a name="s3AccessGrants" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrants"></a>

```java
public RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList getS3AccessGrants();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList</a>

---

##### `lakeFormationInput`<sup>Optional</sup> <a name="lakeFormationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.lakeFormationInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationLakeFormation> getLakeFormationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationLakeFormation">RedshiftIdcApplicationServiceIntegrationLakeFormation</a>>

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.redshiftInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshift> getRedshiftInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>>

---

##### `s3AccessGrantsInput`<sup>Optional</sup> <a name="s3AccessGrantsInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.s3AccessGrantsInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrants> getS3AccessGrantsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegration">RedshiftIdcApplicationServiceIntegration</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList;

new RedshiftIdcApplicationServiceIntegrationRedshiftConnectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshiftConnect> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference;

new RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshiftConnect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftList <a name="RedshiftIdcApplicationServiceIntegrationRedshiftList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationRedshiftList;

new RedshiftIdcApplicationServiceIntegrationRedshiftList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshift> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>>

---


### RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference <a name="RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference;

new RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect">putConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect">resetConnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnect` <a name="putConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect"></a>

```java
public void putConnect(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshiftConnect> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>>

---

##### `resetConnect` <a name="resetConnect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.resetConnect"></a>

```java
public void resetConnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput">connectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connect"></a>

```java
public RedshiftIdcApplicationServiceIntegrationRedshiftConnectList getConnect();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnectList">RedshiftIdcApplicationServiceIntegrationRedshiftConnectList</a>

---

##### `connectInput`<sup>Optional</sup> <a name="connectInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.connectInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationRedshiftConnect> getConnectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftConnect">RedshiftIdcApplicationServiceIntegrationRedshiftConnect</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshiftOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegrationRedshift getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationRedshift">RedshiftIdcApplicationServiceIntegrationRedshift</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrants> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess">putReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess">resetReadWriteAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReadWriteAccess` <a name="putReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```java
public void putReadWriteAccess(IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>>

---

##### `resetReadWriteAccess` <a name="resetReadWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```java
public void resetReadWriteAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess">readWriteAccess</a></code> | <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput">readWriteAccessInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readWriteAccess`<sup>Required</sup> <a name="readWriteAccess" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```java
public RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList getReadWriteAccess();
```

- *Type:* <a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList</a>

---

##### `readWriteAccessInput`<sup>Optional</sup> <a name="readWriteAccessInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess> getReadWriteAccessInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrants getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrants">RedshiftIdcApplicationServiceIntegrationS3AccessGrants</a>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get"></a>

```java
public RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>>

---


### RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_idc_application.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference;

new RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.redshiftIdcApplication.RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess">RedshiftIdcApplicationServiceIntegrationS3AccessGrantsReadWriteAccess</a>

---



